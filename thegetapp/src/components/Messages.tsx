import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Chip } from "@heroui/react";
import "../App.css";

type Message = {
  id: string;
  text: string;
  sender: "me" | "other";
  createdAt: string | Date;
};

type MessagesProps = {
  messages: Message[];
};

function formatSmartDate(dateInput: string | Date): string {
  const date = new Date(dateInput);
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (now.toDateString() === date.toDateString()) return "Today";
  if (yesterday.toDateString() === date.toDateString()) return "Yesterday";

  if (diffDays < 7) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  }

  if (now.getFullYear() === date.getFullYear()) {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
  }

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function groupMessagesByDate(messages: Message[]) {
  const groups: Record<string, Message[]> = {};
  for (const msg of messages) {
    const key = new Date(msg.createdAt).toDateString();
    if (!groups[key]) groups[key] = [];
    groups[key].push(msg);
  }
  return Object.entries(groups).sort(
    ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
  );
}

export default function Messages({ messages }: MessagesProps) {
  const grouped = groupMessagesByDate(messages);
  const containerRef = useRef<HTMLDivElement>(null);
  const dateRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [stickyDateKey, setStickyDateKey] = useState<string | null>(null);
  const [topVisibleDateKey, setTopVisibleDateKey] = useState<string | null>(null);

  const lastScrollTop = useRef(0);
  const scrollDirection = useRef<"up" | "down">("down");

  useEffect(() => {
    if (!containerRef.current) return;

    const onScroll = () => {
      const scrollTop = containerRef.current!.scrollTop;
      scrollDirection.current = scrollTop > lastScrollTop.current ? "down" : "up";
      lastScrollTop.current = scrollTop;
    };

    containerRef.current.addEventListener("scroll", onScroll);
    return () => containerRef.current?.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .map((entry) => ({
            key: entry.target.getAttribute("data-date")!,
            top: entry.boundingClientRect.top,
            isVisible: entry.isIntersecting,
          }))
          .sort((a, b) => a.top - b.top);

        if (scrollDirection.current === "down") {
          // При скролле вниз показываем первую видимую дату
          const firstVisible = visible.find((v) => v.isVisible);
          if (firstVisible && firstVisible.key !== stickyDateKey) {
            setStickyDateKey(firstVisible.key);
          }
        } else {
          // При скролле вверх показываем последнюю дату, которая ушла выше (top < 60)
          const passed = visible.filter((v) => v.top < 60);
          if (passed.length > 0) {
            const lastPassed = passed[passed.length - 1];
            if (lastPassed.key !== stickyDateKey) {
              setStickyDateKey(lastPassed.key);
            }
          } else {
            // Если ни одна не ушла выше — показываем первую видимую дату
            const firstVisible = visible.find((v) => v.isVisible);
            if (firstVisible && firstVisible.key !== stickyDateKey) {
              setStickyDateKey(firstVisible.key);
            }
          }
        }

        // Для скрытия дублирования sticky-чипа
        const firstVisible = visible.find((v) => v.isVisible);
        if (firstVisible && firstVisible.key !== topVisibleDateKey) {
          setTopVisibleDateKey(firstVisible.key);
        }
      },
      {
        root: containerRef.current,
        threshold: [0],
        rootMargin: "0px 0px -99% 0px",
      }
    );

    Object.values(dateRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [grouped, stickyDateKey, topVisibleDateKey]);

  // Скрываем sticky если совпадает с верхним видимым чипом
  const showStickyChip =
    stickyDateKey !== null && stickyDateKey !== topVisibleDateKey;

  return (
    <div
      ref={containerRef}
      className="relative h-full overflow-y-auto scrollbar-hide"
    >
      {showStickyChip && (
        <div className="sticky top-[10px] z-10 flex justify-center py-1">
          <Chip variant="solid">
            {formatSmartDate(new Date(stickyDateKey))}
          </Chip>
        </div>
      )}

      <div className="px-4 pb-4 space-y-4">
        {grouped.map(([dateKey, msgs]) => (
          <div key={dateKey}>
            <div
              ref={(el) => {
                dateRefs.current[dateKey] = el;
              }}
              data-date={dateKey}
              className="flex justify-center py-2"
            >
              <Chip variant="solid">
                {formatSmartDate(new Date(dateKey))}
              </Chip>
            </div>

            {msgs.map((msg) => (
              <div
                key={msg.id}
                className={clsx("flex my-1", {
                  "justify-end": msg.sender === "me",
                  "justify-start": msg.sender === "other",
                })}
              >
                <div
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm break-words max-w-md",
                    {
                      "bg-blue-500 text-white": msg.sender === "me",
                      "bg-white text-gray-800 shadow-md": msg.sender === "other",
                    }
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
