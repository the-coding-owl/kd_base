/*
 *    Project:	kd_base - kd_base
 *    Version:	1.0.0
 *    Date:		27.06.2015 16:07:08
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
lib.socials = COA
lib.socials{
    10 = COA
    10{
        #facebook
        10 = TEXT
        10{
            value{
                typolink{
                    parameter = {$baseconfig.socials.facebook.url}
                    title.data = LLL:EXT:kd_base/Resources/Private/Language/locallang.xlf:socials.facebook.share
                }
                cObject = COA
                cObject{
                    10 = IMAGE
                    10{
                        file = {$baseconfig.socials.facebook.icon}
                        altText.data = LLL:EXT:kd_base/Resources/Private/Language/locallang.xlf:socials.facebook.share
                    }
                }
            }
        }
        #twitter
        20 = TEXT
        20{
            value{
                typolink{
                    parameter = {$baseconfig.socials.twitter.url}
                    title.data = LLL:EXT:kd_base/Resources/Private/Language/locallang.xlf:socials.twitter.share
                }
                cObject = COA
                cObject{
                    10 = IMAGE
                    10{
                        file = {$baseconfig.socials.twitter.icon}
                        altText.data = LLL:EXT:kd_base/Resources/Private/Language/locallang.xlf:socials.twitter.share
                    }
                }
            }
        }
    }
}
[globalVar = LIT:0 = {$epconfig.socials.facebook.enable}]
lib.socials.10.10 >
[global]
[globalVar = LIT:0 = {$epconfig.socials.twitter.enable}]
lib.socials.10.10 >
[global]