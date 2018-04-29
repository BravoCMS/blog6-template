---
title: Discussion tag usage
---

Tag to provide element with discussion

# <{get_discussion "`variable_name`" element=`$var_element`}>

`variable_name` - the variable name with will be assigned with discussion data
it will be accessible as `$variable_name` after assignment

`$var_element` - the variable which represents one of the listed elements of website:
blog_article, catalog_article, page, photo, employee, event

## `$discussion` data

`$discussion.posts_count` - total count of threads
`$discussion.updated_at` - last post added timestamp
`$discussion.is_active` - [0,1] if should form and discussion displayed
`$discussion.is_pros` - [0,1] if should pros field displayed
`$discussion.is_cons` - [0,1] if should cons field displayed
`$discussion.thread` - contains posts
`$discussion.thread[post_id].id`
`$discussion.thread[post_id].author`
`$discussion.thread[post_id].comment`
`$discussion.thread[post_id].pros`
`$discussion.thread[post_id].cons`
`$discussion.thread[post_id].rating`
`$discussion.thread[post_id].answers` - contains answers to the post

## <{discussion_form `$discussion` return_url="`return_url`"}> ... form fields ... <{/discussion_form}>

Discussion form to submit new posts
`$discussion` - discussion variable obtained via `get_discussion` tag
`return_url` - optional attribute, default to current page. May be applied anchor e.g. `#discussion-anchor`

Available field names:
comment - text, required
pros - text
cons - text
author - text 0-255
rating - integer, 1-5
answer_to_discussion_post_id - integer, id of the post to answer

## <{discussion_form_success $discussion}> ... success html ... <{/discussion_form_success}>

Congratulate user about successfully created post

## <{discussion_form_error $discussion '`var_reason`'}> ... error html ... <{/discussion_form_error}>

Show message that post wasn't created

`var_reason` - optional, will be assigned with error message, explaining why post wasn't created
will be accessible as `$var_reason`


[Template tags](index.md).
[Home](index.md).
