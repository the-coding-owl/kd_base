/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:30:42
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
# customsubcategory=twitter=LLL:EXT:kd_base/Resources/Private/Language/locallang.xlf:socials.twitter.subcategory
# customsubcategory=facebook=LLL:EXT:kd_base/Resources/Private/Language/locallang.xlf:socials.facebook.subcategory

baseconfig{
    # cat=debug/enable/10; type=boolean; label= Enable debug mode
    debug = 0
    baseUrl{
        # cat=base//10; type=options[http://,https://]; label= BaseURL protocoll
        protocoll = http://
        # cat=base//20; type=string; label= BaseURL server address
        server = 
        # cat=base/enable/30; type=boolean; label= Enable BaseURL
        enable = 0
    }
    # cat=base//30; type=string; label= Prefix to be prepended to relative links
    absRefPrefix = 
    
    
    pagetitle{
        # cat=base//40; type=string; label= The seperator between site title and page title
        seperator = -
        # cat=base//50; type=boolean; label= Page title before site title
        pageTitleFirst = 0
    }
    
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
        # cat=jquery//40; type=options[jQuery=1,Google=2,Microsoft=3,CDNJS=4,jsDelivr=5]; label= Available jQuery CDN: Choose the prevered CDN from which to load jQuery
        cdn = 1
        # cat=jquery//50; type=string; label= jQuery CDN URL: Fill in a path to your own jquery CDN(the version can not be applied then, you have to specify it in your cdn link)
        cdnUrl = 
    }
    bootstrap{
        # cat=bootstrap/enable/10; type=boolean; label= Enable Bootstrap
        enable = 1
        # cat=bootstrap//10; type=boolean; label= Load local Bootstrap: Load Bootstrap from local server, please be aware that if you do not provide a path to local Bootstrap directory with specified version, only Bootstrap version 3.3.5 is supported
        local = 0
        # cat=bootstrap//20; type=string; label= Path to local Bootstrap
        localPath = 
        # cat=bootstrap//30; type=string; label= Bootstrap Version
        version = 3.3.5
        # cat=bootstrap//40; type=options[Bootstrap=1]; label= Available Bootstrap CDN: Choose the prevered CDN from which to load Bootstrap
        cdn = 1
        # cat=bootstrap//50; type=string; label= Bootstrap CDN URL: Fill in a path to your own Bootstrap CDN(the version can not be applied then, you have to specify it in your cdn link)
        cdnUrl = 
        theme{
             # cat=bootstrap//60; type=string; label= Bootstrap Theme CDN URL: Fill in a path to your own Bootstrap Theme CDN(the version can not be applied then, you have to specify it in your cdn link)
            cdnUrl = 
        }
        js{
            # cat=bootstrap//70; type=string; label= Bootstrap Javascript CDN URL: Fill in a path to your own Bootstrap Javascript CDN(the version can not be applied then, you have to specify it in your cdn link)
            cdnUrl = 
        }
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
            # cat=language/default/10; type=int+; label= Sys language uid
            sys_language_uid = 0
            # cat=language/default/20; type=string; label= Language
            language = en
            # cat=language/default/30; type=string; label= Language locale
            locale_all = en_GB
            # cat=language/default/40; type=string; label= Text for the language menu
            langText = English
        }
        de{
            # cat=language/german/10; type=int+; label= Sys language uid
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
        facebook{
            # cat=socials/facebook/10; type=string; label= Url to the facebook profile
            url = https://facebook.com/
            # cat=socials/facebook/20; type=string; label= Icon for the facebook social
            icon = EXT:kd_base/Resources/Public/Icons/facebook.png
            # cat=socials/facebook/30; type=boolean; label= Enable the facebook social
            enable = 0
        }
        twitter{
            # cat=socials/twitter/10; type=string; label= Url to the twitter profile
            url = https://twitter.com/
            # cat=socials/twitter/20; type=string; label= Icon for the twitter social
            icon = EXT:kd_base/Resources/Public/Icons/twitter.png
            # cat=socials/twitter/30; type=boolean; label= Enable the twitter social
            enable = 0
        }
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