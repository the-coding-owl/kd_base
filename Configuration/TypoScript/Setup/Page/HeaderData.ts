/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:32:52
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
################################################################################
# PAGETITLE ####################################################################
################################################################################
config{
    pageTitleSeparator = {$baseconfig.pagetitle.separator}
    pageTitleFirst = {$baseconfig.pagetitle.pageTitleFirst}
}
################################################################################
# STYLESHEETS AND JAVASCRIPTS ##################################################
################################################################################
page.includeCSS{
    template = EXT:kd_base/Resources/Public/Stylesheets/template.css
}
page.includeCSSLibs{
    
}
[globalVar = LIT:1 = {$baseconfig.bootstrap.enable} && globalVar = LIT:0 = {$baseconfig.bootstrap.local}]
page.includeCSSLibs{
    bootstrap = {$baseconfig.bootstrap.cdnUrl}
    bootstrap.external = 1
    bootstrap-theme = {$baseconfig.bootstrap.theme.cdnUrl}
    bootstrap-theme.external = 1
}
page.includeJSFooterlibs{
    bootstrap = {$baseconfig.bootstrap.js.cdnUrl}
    bootstrap.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.bootstrap.enable}] && [globalVar = LIT:1 = {$baseconfig.bootstrap.cdn}] && [globalVar = LIT:0 = {$baseconfig.bootstrap.local}]
page.includeCSSLibs{
    bootstrap.ifEmpty = //maxcdn.bootstrapcdn.com/bootstrap/{$baseconfig.bootstrap.version}/css/bootstrap.min.css
    bootstrap.external = 1
    bootstrap-theme.ifEmpty = //maxcdn.bootstrapcdn.com/bootstrap/{$baseconfig.bootstrap.version}/css/bootstrap-theme.min.css
    bootstrap-theme.external = 1
}
page.includeJSFooterlibs{
    bootstrap.ifEmpty = //maxcdn.bootstrapcdn.com/bootstrap/{$baseconfig.bootstrap.version}/js/bootstrap.min.js
    bootstrap.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.bootstrap.enable}] && [globalVar = LIT:1 = {$baseconfig.bootstrap.local}]
page.includeCSSLibs{
    bootstrap = {$baseconfig.bootstrap.localPath}/bootstrap-{$baseconfig.bootstrap.version}.min.css
    bootstrap.external = 0
    bootstrap.ifEmpty = EXT:kd_base/Resources/Public/Stylesheets/Bootstrap/bootstrap-{$baseconfig.bootstrap.version}.min.css
    bootstrap-theme = {$baseconfig.bootstrap.localPath}/bootstrap-{$baseconfig.bootstrap.version}-theme.min.css
    bootstrap-theme.external = 0
    bootstrap-theme.ifEmpty = EXT:kd_base/Resources/Public/Stylesheets/Bootstrap/bootstrap-{$baseconfig.bootstrap.version}-theme.min.css
} 
page.includeJSFooterlibs{
    bootstrap = {$baseconfig.bootstrap.localPath}/bootstrap-{$baseconfig.bootstrap.version}.min.js
    bootstrap.external = 0
    bootstrap.ifEmpty = EXT:kd_base/Resources/Public/Javascripts/Bootstrap/bootstrap-{$baseconfig.bootstrap.version}.min.js
}  
[global]
page.includeJS{
    template = EXT:kd_base/Resources/Public/Javascripts/template.js
}
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterlibs{
    jQuery = {$baseconfig.jquery.cdnUrl}
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:1 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterlibs{
    jQuery.ifEmpty = //code.jquery.com/jquery-{$baseconfig.jquery.version}.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:2 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterlibs{
    jQuery.ifEmpty = //ajax.googleapis.com/ajax/libs/jquery/{$baseconfig.jquery.version}/jquery.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:3 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterlibs{
    jQuery.ifEmpty = //ajax.aspnetcdn.com/ajax/jQuery/jquery-{$baseconfig.jquery.version}.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:4 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery.ifEmpty = //cdnjs.cloudflare.com/ajax/libs/jquery/{$baseconfig.jquery.version}/jquery.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:5 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterlibs{
    jQuery.ifEmpty = //cdn.jsdelivr.net/jquery/{$baseconfig.jquery.version}/jquery.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:1 = {$baseconfig.jquery.local}]
page.includeJSFooterlibs{
    jQuery = {$baseconfig.jquery.localPath}/jquery-{$baseconfig.jquery.version}.min.js
    jQuery.external = 0
    jQuery.ifEmpty = EXT:kd_base/Resources/Public/Javascripts/jQuery/jquery-{$baseconfig.jquery.version}.min.js
}   
[global]
