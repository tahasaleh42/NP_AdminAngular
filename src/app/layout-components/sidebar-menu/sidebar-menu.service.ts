import { Injectable } from '@angular/core';

interface MenuItem {
    title: string;
    type: string;
    badge?: {
        class: string;
        text: string;
    };
    link?: string;
    active?: boolean;
    icon?: string;
    submenus?: MenuItem[];
}

@Injectable({
    providedIn: 'root'
})
export class SidebarMenuService {

    menus: MenuItem[] = [

  {
    "title": "Our Details",
    "type": "header"
  },
  {
    "title": "home",
    "type": "simple",
    "icon": "<i class=\"pe-7s-home\"> </i>",
    "link": "/dash/home",


  },

  {
    "title": "Our Details",
    "type": "simple",
    "icon": "<i class=\"pe-7s-news-paper\"> </i>",
    "link": "/dash/aboutUs",

  },


  {
    "title": "Slider",
    "type": "simple",
    "icon": "<i class=\"pe-7s-paperclip\"> </i>",
    "link": "/dash/slider",

  },

  {
    "title": "Our Vedios",
    "type": "simple",
    "icon": "<i class=\"pe-7s-film\"> </i>",
    "link": "/dash/vedios",

  },
  // {
  //   "title": "Countries",
  //   "type": "simple",
  //   "icon": "<i class=\"pe-7s-map\"> </i>",
  //   "link": "/dash/mainPlace",

  // },



  {
    "title": "All Users",
    "type": "header"
  },

  {
    "title": "Manger Account",
    "type": "simple",
    "icon": "<i class=\"pe-7s-id\"> </i>",
    "link": "/dash/mangerAccount",

  },

  {
    "title": "All Customers",
    "type": "simple",
    "icon": "<i class=\"pe-7s-users\"> </i>",
    "link": "/dash/customers",

  },
  {
    "title": "All Organizations",
    "type": "simple",
    "icon": "<i class=\"pe-7s-culture\"> </i>",
    "link": "/dash/organizations",

  },
  {
    "title": "Team Memmbers",
    "type": "simple",
    "icon": "<i class=\"pe-7s-users\"> </i>",
    "link": "/dash/teamMemmber",

  },

  {
    "title": "Models Form",
    "type": "header"
  },



  {
    "title": "Our Models",
    "type": "simple",
    "icon": "<i class=\"pe-7s-note2\"> </i>",
    "link": "/dash/ourServices",

  },
  {
    "title": "News",
    "type": "simple",
    "icon": "<i class=\"pe-7s-display2\"> </i>",
    "link": "/dash/news",

  },
  {
    "title": "Media",
    "type": "simple",
    "icon": "<i class=\"pe-7s-notebook\"> </i>",
    "link": "/dash/media",

  },

  {
    "title": "Other Details",
    "type": "header"
  },


  {
    "title": "Terms And Conditions",
    "type": "simple",
    "icon": "<i class=\"pe-7s-way\"> </i>",
    "link": "/dash/terms",

  },
  {
    "title": "Our Partner",
    "type": "simple",
    "icon": "<i class=\"pe-7s-id\"> </i>",
    "link": "/dash/ourPartner",

  },



  {
    "title": "Contact Us Message",
    "type": "simple",
    "icon": "<i class=\"pe-7s-bell\"> </i>",
    "link": "/dash/contactUs",

  },



];

    constructor() { }

    getMenuList() {
        return this.menus;
    }

    getMenuItemByUrl(aMenus: MenuItem[], aUrl: string): MenuItem {
        for (const theMenu of aMenus) {
            if (theMenu.link && theMenu.link === aUrl) {
                return theMenu;
            }

            if (theMenu.submenus && theMenu.submenus.length > 0) {
                const foundItem = this.getMenuItemByUrl(theMenu.submenus, aUrl);
                if (foundItem) {
                    return foundItem;
                }
            }
        }

        return undefined;
    }

    toggleMenuItem(aMenus: MenuItem[], aCurrentMenu: MenuItem): MenuItem[] {
        return aMenus.map((aMenu: MenuItem) => {
            if (aMenu === aCurrentMenu) {
                aMenu.active = !aMenu.active;
            } else {
                aMenu.active = false;
            }

            if (aMenu.submenus && aMenu.submenus.length > 0) {
                aMenu.submenus = this.toggleMenuItem(aMenu.submenus, aCurrentMenu);

                if (aMenu.submenus.find(aChild => aChild.active)) {
                    aMenu.active = true;
                }
            }

            return aMenu;
        });
    }
}
