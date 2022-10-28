<?php

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
if (!defined('TYPO3')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', array(
    'robots_index' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_index',
        'config' => array(
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => array(
                array('LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_index.index','index'),
                array('LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_index.noindex','noindex'),
            )
        )
    ),
    'robots_follow' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_follow',
        'config' => array(
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => array(
                array('LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_follow.follow','follow'),
                array('LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_follow.nofollow','nofollow'),
            )
        )
    ),
    'robots_nosnippet' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_nosnippet',
        'config' => array(
            'type' => 'check',
            'default' => 0,
        )
    ),
    'robots_noodp' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_noodp',
        'config' => array(
            'type' => 'check',
            'default' => 0,
        )
    ),
    'robots_noarchive' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_noarchive',
        'config' => array(
            'type' => 'check',
            'default' => 0,
        )
    ),
    'robots_noimageindex' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_noimageindex',
        'config' => array(
            'type' => 'check',
            'default' => 0,
        )
    ),
    'robots_unavailable_after' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_unavailable_after',
        'config' => array(
            'type' => 'check',
            'default' => 0,
        )
    ),
));
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('pages', 'metatags', '--linebreak--,robots_index,robots_follow,--linebreak--,robots_nosnippet,robots_noodp,robots_noarchive,robots_noimageindex,robots_unavailable_after', 'after:description');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile('kd_base', 'Configuration/TsConfig/Page/BackendLayout.tsconfig', 'Backend Layout');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile('kd_base', 'Configuration/TsConfig/Page/TCEFORM.tsconfig', 'TCEFORM configuration');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile('kd_base', 'Configuration/TsConfig/Page/RTE.tsconfig', 'RTE configuration');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kd_base/Configuration/TsConfig/User/Admin.ts">');

$GLOBALS['TCA']['pages']['columns']['module']['config']['items'][] = array(
    'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.module.menu',
    'menu',
    'actions-menu'
);
$GLOBALS['TCA']['pages']['ctrl']['typeicon_classes']['contains-menu'] = 'actions-menu';
