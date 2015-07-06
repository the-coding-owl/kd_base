/*
 *    Project:	kd_base - kd_base
 *    Version:	1.0.0
 *    Date:		28.06.2015 20:51:19
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
config{
    adminPanel = 0
    compressCss = 1
    compressJs = 1
    concatenateCss = 1
    concatenateJs = 1
    debug = {$baseconfig.debug}
}
[globalVar = LIT:1 = {$baseconfig.debug}]
config{
    tx_realurl_enable = 0
    simulateStaticDocuments = 0
    adminPanel = 1
    compressCss = 0
    compressJs = 0
    concatenateCss = 0
    concatenateJs = 0
    sendCacheHeaders = 0
}
#disable scriptmerger extension
plugin.tx_scriptmerger{
    css.enable = 0
    javascript.enable = 0
}
[global]