#
# Table structure for table 'pages'
#
CREATE TABLE pages (
    robots_index VARCHAR(255) DEFAULT 'index' NOT NULL,
    robots_follow VARCHAR(255) DEFAULT 'follow' NOT NULL,
    robots_nosnippet tinyint(1) DEFAULT '0' NOT NULL,
    robots_noodp tinyint(1) DEFAULT '0' NOT NULL,
    robots_noarchive tinyint(1) DEFAULT '0' NOT NULL,
    robots_noimageindex tinyint(1) DEFAULT '0' NOT NULL,
    robots_unavailable_after tinyint(1) DEFAULT '0' NOT NULL,
);