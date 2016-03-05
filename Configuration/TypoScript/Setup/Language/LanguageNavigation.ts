/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:32:29
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */

lib.languageNavigation = HMENU
lib.languageNavigation {
	# Ein Sprach-Menü wird erzeugt
	special = language
	# Reihenfolge und Auswahl der Sprachen im Menü
	special.value = {$baseconfig.language.default.sys_language_uid},{$baseconfig.language.de.sys_language_uid}
	special.normalWhenNoLanguage = {$baseconfig.language.default.sys_language_uid}
	wrap = <ul id="language navigation">|</ul>
	1 = TMENU
	1 {
		noBlur = 1
		NO = 1
		NO {
			linkWrap = <li>|</li>
			stdWrap.override = {$baseconfig.language.default.langText} || {$baseconfig.language.de.langText}
			doNotLinkIt = 1
			stdWrap.typolink.parameter.data = page:uid
			stdWrap.typolink.additionalParams = &L={$baseconfig.language.default.sys_language_uid} || &L={$baseconfig.language.de.sys_language_uid}
		}
		# Aktive Sprache
		ACT < .NO
		ACT.linkWrap = <li class="active">|</li>
		# NO + Übersetzung nicht vorhanden
		USERDEF1 < .NO
		# ACT + Übersetzung nicht vorhanden
		USERDEF2 < .ACT
	}
}