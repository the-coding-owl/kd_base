<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/PageTS/PageTS.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/UserTS/UserTS.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:css_styled_content/static/constants.txt">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:css_styled_content/static/setup.txt">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Constants/Constants.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TypoScript/Setup/Setup.ts">');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', array(
    'robots_index' => array(
        'exclude' => 1,
        'label' => 'LLL:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_index',
        'config' => array(
            'type' => 'select',
            'items' => array(
                array('LLL:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_index.index','index'),
                array('LLL:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_index.noindex','noindex'),
            )
        )
    ),
    'robots_follow' => array(
        'exclude' => 1,
        'label' => 'LLL:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_follow',
        'config' => array(
            'type' => 'select',
            'items' => array(
                array('LLL:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_follow.follow','follow'),
                array('LLL:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_follow.nofollow','nofollow'),
            )
        )
    ),
));