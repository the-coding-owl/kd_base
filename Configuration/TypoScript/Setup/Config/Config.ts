/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 16:33:29
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
config{
    prefixLocalAnchors = all
    baseUrl = {$baseconfig.baseUrl.protocoll}{$baseconfig.baseUrl.server}/
    absRefPrefix = {$baseconfig.absRefPrefix}
    adminPanel = 0
    debug = {$baseconfig.debug}

    simulateStaticDocuments = {$baseconfig.simulateStaticDocuments}
    tx_realurl_enable = {$baseconfig.tx_realurl_enable}
}
[globalVar = LIT:0 = {$baseconfig.baseUrl.enable}]
config.baseUrl >
[global]
[globalVar = LIT:1 = {$baseconfig.tx_realurl_enable}]
config.simulateStaticDocuments = 0
[global]
[globalVar = LIT:1 = {$baseconfig.debug}]
config{
    tx_realurl_enable = 0
    simulateStaticDocuments = 0
    adminPanel = 1
}
[global]