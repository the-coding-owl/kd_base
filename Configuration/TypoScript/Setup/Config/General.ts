/*
 *    Project:	kd_base - kd_base
 *    Version:	1.0.0
 *    Date:		28.06.2015 20:53:00
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
config{
    prefixLocalAnchors = all
    baseUrl = {$baseconfig.baseUrl.protocoll}{$baseconfig.baseUrl.server}/
    absRefPrefix = {$baseconfig.absRefPrefix}

    simulateStaticDocuments = {$baseconfig.simulateStaticDocuments}
    tx_realurl_enable = {$baseconfig.tx_realurl_enable}
    moveJsFromHeaderToFooter = 1
    setJS_openPic = 1
    spamProtectEmailAddresses = ascii
    spamProtectEmailAddresses_atSubst = (at)
    spamProtectEmailAddresses_lastDotSubst = (dot)
}
[globalVar = LIT:0 = {$baseconfig.baseUrl.enable}]
config.baseUrl >
[global]
[globalVar = LIT:1 = {$baseconfig.tx_realurl_enable}]
config.simulateStaticDocuments = 0
[global]