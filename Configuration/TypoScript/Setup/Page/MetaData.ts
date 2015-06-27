/*
 *    Project:	typo3 - typo3
 *    Version:	1.0.0
 *    Date:		25.01.2015 11:33:01
 *    Author:	kevin 
 *
 *    Coded with Netbeans!
 */
page.meta{
    description{
        data = page:description
        ifEmpty.data = levelfield: -1, description, slide
    }
    keywords{
        data = page:keywords
        ifEmpty.data = levelfield: -1, keywords, slide
    }
    abstract{
        data = page:abstract
        ifEmpty.data = levelfield: -1, abstract, slide
    }
    author{
        data = page:author
        ifEmpty.data = levelfield: -1, author, slide
    }
}