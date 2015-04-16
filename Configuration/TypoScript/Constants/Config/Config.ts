/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:30:42
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
baseconfig{
    # cat=debug/enable/10; type=boolean; label= Enable debug mode
    debug = 0
    baseUrl{
        # cat=base//10; type=options[http://,https://]; label= BaseURL protocoll
        protocoll = http://
        # cat=base//20; type=string; label= BaseURL server address
        server = 
    }
    # cat=base//30; type=string; label= Prefix to be prepended to relative links
    absRefPrefix = 
    
    simulateStaticDocuments = 0
    tx_realurl_enable = 1
    jquery{
        # cat=jquery/enable/10; type=boolean; label= Enable jQuery
        enable = 1
        # cat=jquery//10; type=boolean; label= Load local jQuery: Load jQuery from local server, please be aware that if you do not provide a path to local jQuery directory with specified version, only jquery version 1.11.2 and 2.1.3 are supported
        local = 0
        # cat=jquery//20; type=string; label= Path to local jQuery
        localPath = 
        # cat=jquery//30; type=string; label= jQuery Version
        version = 2.1.3
        # cat=jquery//40; type=options[jQuery=0,Google=1,Microsoft=2,CDNJS=3,jsDelivr=4]; label= Available jQuery CDN: Choose the prevered CDN from which to load jQuery
        cdn = 0
        # cat=jquery//50; type=string; label= jQuery CDN URL: Fill in a path to your own jquery CDN(the version can not be applied then, you have to specify it in your cdn link)
        cdnUrl = 
    }
    language{
        config{
            # cat=language//10; type=string; label= Sys language mode
            sys_language_mode = content_fallback
            # cat=language//20; type=string; label= Sys language overlay
            sys_language_overlay = hideNonTranslated
            # cat=language//30; type=string; label= Sys language overlay
            metaCharset = utf-8
        }
        default{
            # cat=language/default/10; type=string; label= Sys language uid
            sys_language_uid = 0
            # cat=language/default/20; type=string; label= Language
            language = en
            # cat=language/default/30; type=string; label= Language locale
            locale_all = en_GB
            # cat=language/default/40; type=string; label= Text for the language menu
            langText = English
        }
        de{
            # cat=language/german/10; type=string; label= Sys language uid
            sys_language_uid = 1
            # cat=language/german/20; type=string; label= Language
            language = de
            # cat=language/german/30; type=string; label= Language locale
            locale_all = de_DE
            # cat=language/german/40; type=string; label= Text for the language menu
            langText = Deutsch
        }
    }
    socials{
        
    }
    navigation{
        # cat=navigation//10; type=int+; label= Page uid of the Main Menu entry point
        mainEntry = 
        # cat=navigation//20; type=int+; label= Page uid of the Meta Menu entry point
        metaEntry = 
        # cat=navigation//30; type=int+; label= Page uid of the Footer Menu entry point
        footerEntry = 
    }

    #cat=base/enable/40; type=boolean; label= Enable admin panel
    adminPanel = 
}