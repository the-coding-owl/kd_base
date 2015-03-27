/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:32:52
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
page.includeCSS{
    template = EXT:kd_base/Resources/Public/Stylesheets/template.css
}
page.includeCSSLibs{
    
}
page.includeJS{
    template = EXT:kd_base/Resources/Public/Javascripts/template.js
}
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery = {$baseconfig.jquery.cdnUrl}
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:0 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery.ifEmpty = //code.jquery.com/jquery-{$baseconfig.jquery.version}.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:1 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery.ifEmpty = //ajax.googleapis.com/ajax/libs/jquery/{$baseconfig.jquery.version}/jquery.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:2 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery.ifEmpty = //ajax.aspnetcdn.com/ajax/jQuery/jquery-{$baseconfig.jquery.version}.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:3 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery.ifEmpty = //cdnjs.cloudflare.com/ajax/libs/jquery/{$baseconfig.jquery.version}/jquery.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:4 = {$baseconfig.jquery.cdn}] && [globalVar = LIT:0 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery.ifEmpty = //cdn.jsdelivr.net/jquery/{$baseconfig.jquery.version}/jquery.min.js
    jQuery.external = 1
}
[global]
[globalVar = LIT:1 = {$baseconfig.jquery.enable}] && [globalVar = LIT:1 = {$baseconfig.jquery.local}]
page.includeJSFooterLibs{
    jQuery = {$baseconfig.jquery.localPath}/jquery-{$baseconfig.jquery.version}.min.js
    jQuery.external = 0
    jQuery.ifEmpty = EXT:kd_base/Resources/Public/Javascripts/jQuery/jquery-{$baseconfig.jquery.version}.min.js
}   
[global]
