import {withAuth} from "next-auth/middleware";

export default withAuth({
    pages:{
        signin:"/" // kişi giriş yapmamış ise signin sayfasına git
    },
});

export const config = {
    matcher: [
        "/conversation/:path",// Eğer giriş yapmışs erişebileceği sayfalar bunlar
        "/users/:path"
    ]
}