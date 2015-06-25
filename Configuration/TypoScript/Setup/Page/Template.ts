/*
 *    Project:	kd_base - kd_base
 *    Version:	1.0.0
 *    Date:		25.06.2015 21:43:44
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
page = PAGE
page{
    10 = FLUIDTEMPLATE
    10{
        file = EXT:kd_base/Resources/Private/Templates/Site.html
        partialRootPath = EXT:kd_base/Resources/Private/Partials/
        layoutRootPath = EXT:kd_base/Resources/Private/Layouts/

        variables{
            layout = CASE
            layout{
                key.field = backend_layout
                default = TEXT
                default{
                    value = default
                }
                1 < .default
                1.value = sidebarleft
                2 < .default
                2.value = sidebarright
            }
            logo < lib.logo
            mainNavigation < lib.mainNavigation
            subNavigation < lib.subNavigation
            metaNavigation < lib.metaNavigation
            footerNavigation < lib.footerNavigation 
            socials < lib.socials 
            languageNavigation < lib.languageNavigation 
            content < styles.content.get
            content.select.where = colPos = 1
            rightColumn < styles.content.get
            rightColumn.select.where = colPos = 2
            leftColumn < styles.content.get
            leftColumn.select.where = colPos = 3
            copyright < lib.copyright
        }
    }
}