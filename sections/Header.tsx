import IconTerminal from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/terminal.tsx"

export interface Props {
    active: string;
}

export default function Header({ active }: Props) {
    const menus = [
      { name: "Sobre", href: "#sobre" },
      { name: "Habilidades", href: "#habilidades" },
      { name: "Projetos", href: "#projetos" },
      { name: "Contato", href: "#contato" }

    ];
  
    return (
      <div class="bg-white border-b-2 w-full max-w-screen-2xl py-6 px-12 justify-center flex flex-col md:flex-row gap-4">
        <div class="flex items-center flex-1">
        <IconTerminal/>
        </div>
        <ul class="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"text-gray-500 hover:text-blue-700 py-1 border-gray-500" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }