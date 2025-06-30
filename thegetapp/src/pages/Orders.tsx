import type {SVGProps} from "react";
import type {Selection, ChipProps, SortDescriptor} from "@heroui/react";
import { useNavigate } from "react-router-dom";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@heroui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const columns = [
    { name: "Order Id", uid: "id" },
  { name: "Picture", uid: "picture" },
  { name: "Seller", uid: "seller" },
  { name: "Price", uid: "price", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "DateTime", uid: "datetime", sortable: true },
  { name: "Actions", uid: "actions" },
];

const orderStatusColorMap: Record<string, ChipProps["color"]> = {
  delivered: "success",
  processing: "warning",
  cancelled: "danger",
};

export const orders = [
  {
    id: 101,
    picture: "https://media-assets.grailed.com/prd/listing/temp/fe4718af5f254ee594ce02a81b2b4abd?w=240", // картинка товара
    sellerName: "Tony Reichert",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    price: "$199.99",
    status: "delivered",
    datetime: "2025-06-22 14:32",
  },
  {
    id: 102,
    picture: "https://media-assets.grailed.com/prd/listing/temp/1d8aa488a9fa40f88157c22da6431237?w=800",
    sellerName: "Jane Fisher",
    sellerAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    price: "$89.50",
    status: "processing",
    datetime: "2025-06-20 09:12",
  },
  {
    id: 103,
    picture: "https://media-assets.grailed.com/prd/listing/temp/cdd4ad2d3e92438c93d847406fb90a6e?w=240",
    sellerName: "Michael Hunt",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    price: "$45.00",
    status: "cancelled",
    datetime: "2025-06-18 17:05",
  },
  {
    id: 104,
    picture: "https://media-assets.grailed.com/prd/listing/temp/fe4718af5f254ee594ce02a81b2b4abd?w=240", // картинка товара
    sellerName: "Tony Reichert",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    price: "$199.99",
    status: "delivered",
    datetime: "2025-06-22 14:32",
  },
  {
    id: 105,
    picture: "https://media-assets.grailed.com/prd/listing/temp/1d8aa488a9fa40f88157c22da6431237?w=800",
    sellerName: "Jane Fisher",
    sellerAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    price: "$89.50",
    status: "processing",
    datetime: "2025-06-20 09:12",
  },
  {
    id: 106,
    picture: "https://media-assets.grailed.com/prd/listing/temp/cdd4ad2d3e92438c93d847406fb90a6e?w=240",
    sellerName: "Michael Hunt",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    price: "$45.00",
    status: "cancelled",
    datetime: "2025-06-18 17:05",
  },
  {
    id: 107,
    picture: "https://media-assets.grailed.com/prd/listing/temp/fe4718af5f254ee594ce02a81b2b4abd?w=240", // картинка товара
    sellerName: "Tony Reichert",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    price: "$199.99",
    status: "delivered",
    datetime: "2025-06-22 14:32",
  },
  {
    id: 108,
    picture: "https://media-assets.grailed.com/prd/listing/temp/1d8aa488a9fa40f88157c22da6431237?w=800",
    sellerName: "Jane Fisher",
    sellerAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    price: "$89.50",
    status: "processing",
    datetime: "2025-06-20 09:12",
  },
  {
    id: 109,
    picture: "https://media-assets.grailed.com/prd/listing/temp/cdd4ad2d3e92438c93d847406fb90a6e?w=240",
    sellerName: "Michael Hunt",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    price: "$45.00",
    status: "cancelled",
    datetime: "2025-06-18 17:05",
  },
  {
    id: 110,
    picture: "https://media-assets.grailed.com/prd/listing/temp/fe4718af5f254ee594ce02a81b2b4abd?w=240", // картинка товара
    sellerName: "Tony Reichert",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    price: "$199.99",
    status: "delivered",
    datetime: "2025-06-22 14:32",
  },
  {
    id: 111,
    picture: "https://media-assets.grailed.com/prd/listing/temp/1d8aa488a9fa40f88157c22da6431237?w=800",
    sellerName: "Jane Fisher",
    sellerAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    price: "$89.50",
    status: "processing",
    datetime: "2025-06-20 09:12",
  },
  {
    id: 112,
    picture: "https://media-assets.grailed.com/prd/listing/temp/cdd4ad2d3e92438c93d847406fb90a6e?w=240",
    sellerName: "Michael Hunt",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    price: "$45.00",
    status: "cancelled",
    datetime: "2025-06-18 17:05",
  },
  {
    id: 113,
    picture: "https://media-assets.grailed.com/prd/listing/temp/fe4718af5f254ee594ce02a81b2b4abd?w=240", // картинка товара
    sellerName: "Tony Reichert",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    price: "$199.99",
    status: "delivered",
    datetime: "2025-06-22 14:32",
  },
  {
    id: 114,
    picture: "https://media-assets.grailed.com/prd/listing/temp/1d8aa488a9fa40f88157c22da6431237?w=800",
    sellerName: "Jane Fisher",
    sellerAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    price: "$89.50",
    status: "processing",
    datetime: "2025-06-20 09:12",
  },
  {
    id: 115,
    picture: "https://media-assets.grailed.com/prd/listing/temp/cdd4ad2d3e92438c93d847406fb90a6e?w=240",
    sellerName: "Michael Hunt",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    price: "$45.00",
    status: "cancelled",
    datetime: "2025-06-18 17:05",
  },
  {
    id: 116,
    picture: "https://media-assets.grailed.com/prd/listing/temp/fe4718af5f254ee594ce02a81b2b4abd?w=240", // картинка товара
    sellerName: "Tony Reichert",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    price: "$199.99",
    status: "delivered",
    datetime: "2025-06-22 14:32",
  },
  {
    id: 117,
    picture: "https://media-assets.grailed.com/prd/listing/temp/1d8aa488a9fa40f88157c22da6431237?w=800",
    sellerName: "Jane Fisher",
    sellerAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    price: "$89.50",
    status: "processing",
    datetime: "2025-06-20 09:12",
  },
  {
    id: 118,
    picture: "https://media-assets.grailed.com/prd/listing/temp/cdd4ad2d3e92438c93d847406fb90a6e?w=240",
    sellerName: "Michael Hunt",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    price: "$45.00",
    status: "cancelled",
    datetime: "2025-06-18 17:05",
  },
  {
    id: 119,
    picture: "https://media-assets.grailed.com/prd/listing/temp/fe4718af5f254ee594ce02a81b2b4abd?w=240", // картинка товара
    sellerName: "Tony Reichert",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    price: "$199.99",
    status: "delivered",
    datetime: "2025-06-22 14:32",
  },
  {
    id: 120,
    picture: "https://media-assets.grailed.com/prd/listing/temp/1d8aa488a9fa40f88157c22da6431237?w=800",
    sellerName: "Jane Fisher",
    sellerAvatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    price: "$89.50",
    status: "processing",
    datetime: "2025-06-20 09:12",
  },
  {
    id: 121,
    picture: "https://media-assets.grailed.com/prd/listing/temp/cdd4ad2d3e92438c93d847406fb90a6e?w=240",
    sellerName: "Michael Hunt",
    sellerAvatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    price: "$45.00",
    status: "cancelled",
    datetime: "2025-06-18 17:05",
  },
];


export function capitalize(s : string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const PlusIcon = ({size = 24, width, height, ...props}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
};

export const VerticalDotsIcon = ({size = 24, width, height, ...props}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({strokeWidth = 1.5, ...otherProps}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...otherProps}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export const statusOptions = [
  { name: "Delivered", uid: "delivered" },
  { name: "Processing", uid: "processing" },
  { name: "Cancelled", uid: "cancelled" },
];

const INITIAL_VISIBLE_COLUMNS = ["picture", "seller", "price", "status", "datetime", "actions"];

type Order = (typeof orders)[0];

export default function App() {
  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS),
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(orders.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredOrders = [...orders];

    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredOrders = filteredOrders.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredOrders;
  }, [orders, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Order, b: Order) => {
      const first = a[sortDescriptor.column as keyof Order] as number;
      const second = b[sortDescriptor.column as keyof Order] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderOrderCell = (order: Order, columnKey: React.Key) => {
  switch (columnKey) {
    case "id":
      return <p>{order.id}</p>
    case "picture":
      return   <img src={order.picture}
                    alt="product"
                    className="w-[100px] h-[100px] object-cover"/>
    case "seller":
      return (
        <User
          avatarProps={{ src: order.sellerAvatar }}
          name={order.sellerName}
          classNames={{ description: "hidden" }}
        />
      );
    case "status":
      return (
        <Chip
          className="capitalize"
          color={orderStatusColorMap[order.status]}
          size="sm"
          variant="flat"
        >
          {order.status}
        </Chip>
      );
    case "actions":
      return (
        <div className="flex justify-end gap-2">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size="sm" variant="light">
                <VerticalDotsIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="view">View</DropdownItem>
              <DropdownItem key="cancel">Cancel</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    default:
      return order[columnKey as keyof Order];
  }
};

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
            radius="none"
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                  radius="none"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                  radius="none"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {orders.length} orders</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    orders.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl", "rounded-none"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]/tr:first:before:rounded-none",
        "group-data-[first=true]/tr:last:before:rounded-none",
        // middle
        "group-data-[middle=true]/tr:before:rounded-none",
        // last
        "group-data-[last=true]/tr:first:before:rounded-none",
        "group-data-[last=true]/tr:last:before:rounded-none",
      ],
    }),
    [],
  );

  return (
    <>
    <Header/>
    <div className="flex justify-center mb-[20px]">
  <div className="w-full max-w-[1000px]">
    <div className="text-[23px] font-semibold my-[20px]">
      My Orders
    </div>
    <Table
      removeWrapper
      aria-label="My Orders"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"You have no orders yet."} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id} className="h-[150px] hover:bg-gray-200"  onClick={(e) => {
    // Игнорируем клик, если он был по интерактивному элементу
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("[role='menuitem']")
    ) {
      return;
    }
    navigate(`/orders/${item.id}`);
  }}>
            {(columnKey) => <TableCell>{renderOrderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
     </div>
     </div>
    <Footer/>
    </>
  );
}
