import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Avatar,
  DropdownItem,
  useDisclosure,
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalHeader,
  Badge
} from "@heroui/react";
import NavigationMenu from "./NavigationMenu";
import type { JSX } from "react/jsx-runtime";
import "../styles.css";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { MailIcon } from "./MailIcon";
import { HeartIcon } from "./HeartIcon";
import { NotificationIcon } from "./NotificationIcon";
import { CartIcon } from "./CartIcon";
import { useAuth } from "./AuthContext";

type BackdropType =  "opaque" | "transparent" | "blur";

export const EyeSlashFilledIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
      {/* SVG paths */}
    </svg>
  );
};

export const EyeFilledIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 24 24" width="1em" {...props}>
      {/* SVG paths */}
    </svg>
  );
};

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    {/* SVG paths */}
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState<BackdropType>("opaque");
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const { user, login, logout } = useAuth();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleOpen = (backdrop: BackdropType) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const handleLoginSubmit = () => {
  const dummyUser = {
    name: email || "User",
    avatarUrl: "https://i.pravatar.cc/150?u=" + email
  };
  login(dummyUser);
  onClose();
  setEmail("");
  setPassword("");
};

  const menuItems = ["Menswear", "Womenswear", "Kids", "Brands", "Sales"];
  const dropDownItemClass = "!bg-transparent rounded-none hover:!bg-black hover:!text-white focus:!bg-black focus:!text-white aria-selected:!bg-black aria-selected:!text-white";

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden navbar-burger"
          />
          <a href="/">
            <NavbarBrand className="ml-[-140px]">
            <p className="text-[27px] font-bold bg-gradient-to-r from-gray-200 via-pink-600 to-black bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
  Curated
</p>
            </NavbarBrand>
          </a>
          <SearchInput />
        </NavbarContent>

        <NavbarContent className="mr-[-100px]" justify="end">
          {!user ? (
            <NavbarItem className="mr-[-19px]">
              <Button
                as={Link}
                className="bg-black text-white"
                href="#"
                variant="flat"
                radius="none"
                onPress={() => handleOpen("blur")}
              >
                Login
              </Button>
              <Button
                as={Link}
                color="default"
                href="#"
                variant="flat"
                radius="none"
                style={{ marginLeft: "10px" }}
              >
                Sign Up
              </Button>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 mr-[20px]">
                  <a href="/messenger">
                   <Badge color="danger" content={5} shape="circle" showOutline={false} size="sm">
                      <MailIcon />
                   </Badge>
                  </a>
                  <a href="/favorites">
                    <HeartIcon fill="gray" strokeColor="gray" />
                  </a>
                  <a href="">
                    <Badge color="danger" content={5} shape="circle" showOutline={false} size="sm">
                      <NotificationIcon />
                    </Badge>
                  </a>
                  <a href="/orders">
                    <CartIcon />
                  </a>
                </div>

                <Dropdown placement="bottom-end" radius="none">
                  <DropdownTrigger>
                    <Avatar
                      size="md"
                     
                      as="button"
                      className="transition-transform"
                      src={user.avatarUrl}
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className={dropDownItemClass}>
                      <p className="font-semibold">Signed in</p>
                    </DropdownItem>
                    <DropdownItem
                      key="view_profile"
                      color="primary"
                      href="/user"
                      className={dropDownItemClass}
                    >
                      View profile
                    </DropdownItem>
                    <DropdownItem
                      key="my_messages"
                      color="primary"
                      href="/messenger"
                      className={dropDownItemClass}
                    >
                      My messages
                    </DropdownItem>
                    <DropdownItem
                      key="favorites"
                      color="primary"
                      href="/favorites"
                      className={dropDownItemClass}
                    >
                      Favorites
                    </DropdownItem>
                    <DropdownItem
                      key="cart"
                      color="primary"
                      href="/drafts"
                      className={dropDownItemClass}
                    >
                      Drafts
                    </DropdownItem>
                    <DropdownItem
                      key="orders"
                      color="primary"
                      href="/orders"
                      className={dropDownItemClass}
                    >
                      Orders
                    </DropdownItem>
                    <DropdownItem
                      key="settings"
                      color="primary"
                      href="/settings"
                      className={dropDownItemClass}
                    >
                      Settings
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      color="danger"
                      className="text-danger hover:rounded-none"
                      onPress={logout}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Button as={Link} href="/listNewProduct" variant="flat" radius="none" className="text-white bg-black">
                  Sell
                </Button>
              </div>
            </NavbarItem>
          )}
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <NavigationMenu />

      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} radius="none">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Login to your account</ModalHeader>
              <ModalBody>
                <Input
                  label="Email"
                  type="email"
                  variant="flat"
                  radius="none"
                  size="sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  radius="none"
                  variant="flat"
                  size="sm"
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  label="Password"
                  type={isVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  size="lg"
                  className="bg-black text-white border-none"
                  variant="faded"
                  radius="none"
                  onPress={handleLoginSubmit}
                >
                  Log in
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-200 text-black border-none"
                  radius="none"
                  variant="faded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="21"
                    viewBox="0 0 24 24"
                    width="21"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Login with Google
                </Button>
              </ModalBody>
              <ModalFooter>
                Don't have an account?{" "}
                <Link href="#" underline="always" className="border-none">
                  Sign up
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
