/*
 *    Project:	base - base
 *    Version:	1.0.0
 *    Date:		29.06.2015 18:57:50
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
lib.copyright = COA
lib.copyright{
    10 = TEXT
    10{
        data = date:U
        wrap = &copy;|
        strftime = %Y
    }
    20 = TEXT
    20{
        value = {$baseconfig.copyright.author}
        noTrimWrap = | | |
        typolink.parameter = {$baseconfig.copyright.email}
    }
    30 = TEXT
    30{
        value = {$baseconfig.copyright.extra}
    }
}