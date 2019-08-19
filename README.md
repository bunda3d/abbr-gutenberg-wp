# abbr-gutenberg-wp
A simple Wordpress plugin that adds HTML <abbr></abbr> tags to any highlighted acronym or text, with one click from the Gutenberg toolbar.

TO INSTALL: 
1.) Download the 2 files named format-html-tag-abbr.js and format-html-tag-abbr.php
2.) Add them to a folder on your computer, name the folder whatever (try "abbr-tag-gutenberg-wp-plugin" if you want to be really descriptive).
3.) Zip the folder.
4.) Upload to your Wordpress installation, install, activate.
5.) You should now have a button labeled "Abbreviation" in your Gutenberg toolbar.

TRY IT OUT: 
1.) Highlight some text, like an acronym, and click the "Abbreviation" button. 
2.) Then look at the block in HTML view and notice the <abbr>TEXT</abbr> tag surrounding the text you highlighted.
3.) For Version 1.0 of this plugin, you'll still have to manually enter your title text to the tag. For example, let's say we highlighted the acronym "CSS".
Now it looks like <abbr>CSS</abbr> in HTML view. 
To add title text, type what the acronym or abbreviation stands for like this:
<abbr title="Cascading Style Sheet">CSS</abbr>

PLANNED UPDATE: to add the ability and UI to enter title text to the abbr tag so it doesn't have to be done manually.
