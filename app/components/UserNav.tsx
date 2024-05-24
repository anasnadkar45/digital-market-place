export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={userImage} alt="User Image" />
                        <AvatarFallback>{name.slice(0, 3)}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            jan@alenix.de
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/sell">Sell your Product</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="my-products">My Products</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/billing">Billing</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}