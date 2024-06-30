
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
 
export const poppins = Poppins({ 
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic']

});
export const geologica = localFont({
    src:'../../public/fonts/Geologica-VariableFont_wght.woff2',
});
export const geologicaSharp = localFont({
    src:'../../public/fonts/Geologica-Sharp-VariableFont_wght.woff2',
});
export const geologicaVariable = localFont({
    src:'../../public/fonts/Geologica-Variable-VariableFont_SHRP,wght.woff2',
});