/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:31:06
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */ 
temp.navigation = HMENU
temp.navigation {
    1 = TMENU
    1{
        wrap = <ul class="navigation">|</ul>
        NO = 1
        NO{
            wrapItemAndSub = <li>|</li>
        }
        ACT < .NO
        ACT.wrapItemAndSub = <li class="active">|</li>
        CUR < .NO
        CUR.wrapItemAndSub = <li class="current">|</li> 
        IFSUB < .NO 
        IFSUB.wrapItemAndSub = <li class="sub">|</li> 
        ACTIFSUB < .NO 
        ACTIFSUB.wrapItemAndSub = <li class="sub active">|</li> 
        CURIFSUB < .NO 
        CURIFSUB.wrapItemAndSub = <li class="sub current">|</li>
    }
    2 < .1
    3 < .1
}
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Navigation/MainNavigation.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Navigation/SubNavigation.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Navigation/MetaNavigation.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Navigation/FooterNavigation.ts">