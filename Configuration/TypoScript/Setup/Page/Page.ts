/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:29:30
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
                    value = startpage
                }
                1 < .default
                1.value = sidebarleft
                2 < .default
                2.value = sidebarright
            }
            pagetitle < lib.pagetitle
            logo < lib.logo
            mainNavigation < lib.mainNavigation
            subNavigation < lib.subNavigation
            metaNavigation < lib.metaNavigation
            footerNavigation < lib.footerNavigation 
            socials < lib.socials 
            languageNavigation < lib.languageNavigation 
            content = styles.content.get
            leftColumn = styles.content.getLeft
            copyright < lib.copyright
        }
    }
}
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Page/HeaderData.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Page/MetaData.ts">
