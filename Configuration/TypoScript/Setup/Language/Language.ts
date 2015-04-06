/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:32:10
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
config{
    sys_language_uid = {$baseconfig.language.default.sys_language_uid}
    linkVars = L
    language = {$baseconfig.language.default.language}
    locale_all = {$baseconfig.language.default.locale_all}
    metaCharset = {$baseconfig.language.config.metaCharset}
    sys_language_mode = {$baseconfig.language.config.sys_language_mode}
    sys_language_overlay = {$baseconfig.language.config.sys_language_overlay}
}
[globalVar = GP:L={$baseconfig.language.de.sys_language_uid}]
config{
    sys_language_uid = {$baseconfig.language.de.sys_language_uid}
    language = {$baseconfig.language.de.language}
    locale_all = {$baseconfig.language.de.locale_all}
}
[global]
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Language/LanguageNavigation.ts">