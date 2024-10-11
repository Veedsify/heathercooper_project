
type NavLinksProps = {
     name: string;
     link: string;
     pageId: string;
}[]

export const navlinks: NavLinksProps = [
     {
          name: 'Home',
          link: '/',
          pageId: '/',
     }, {
          name: 'About Us',
          link: '/about',
          pageId: '/about',
     }, {
          name: 'Products',
          link: '/products',
          pageId: '/products',
     }, {
          name: 'Carrers',
          link: '/carrers',
          pageId: '/carrers',
     }, {
          name: 'CSR',
          link: '/cooperate-social-responsibility',
          pageId: '/cooperate-social-responsibility',
     }, {
          name: 'Contact Us',
          link: '/contact',
          pageId: '/contact',
     }
]