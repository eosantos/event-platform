import { LogoFooter } from "./LogoFooter";

export function Footer() {
  return (
    <footer className="p-8 max-w-[1280px] max-h-[60vh] mx-auto">
      <div className="w-full h-full flex items-center p-6 border-t border-gray-500 gap-8 ">
        <div className="">
          <LogoFooter />
        </div>{" "}
        <div className="w-full h-full flex justify-start items-center text-sm text-gray-200">
          Rocketseat - Todos os direitos reservados
        </div>
        <div className="w-full h-full flex justify-end items-center text-sm  text-gray-200">
          Políticas de privacidade
        </div>
      </div>
    </footer>
  );
}
