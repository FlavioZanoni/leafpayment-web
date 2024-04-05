export type SidebarMenu = {
    title: string
    icon: string
    link: string
}


export const sidebarMenus = [
    {
        title: "Dashboard",
        icon: "dashboard"
    },
    {
        title: "Folha de Pagamento",
        icon: "receipt_long",
        link: "/leaf-payment"
    },
    {
        title: "Funcionários",
        icon: "person_apron",
        link: "/employers"
    }
]