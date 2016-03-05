<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', array(
    'robots_index' => array(
        'exclude' => 1,
        'label' => 'LLL:EXT:kd_base/Resources/Private/Language/locallang_db.xlf:pages.robots_index',
        'config' => array(
            'type' => 'select',
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
