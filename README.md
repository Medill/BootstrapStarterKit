# Bootstrap Starter Kit
## See it
[See it in action here](http://medill.github.io/BootstrapStarterKit/)

[Typography Specimen Sheet](http://medill.github.io/BootstrapStarterKit/typography.html)
##Included Javascript
* [Laziest Loader Library](http://sjwilliams.github.io/laziestloader/)
* [Fluidbox](http://terrymun.github.io/Fluidbox/)
* [Waypoints](http://imakewebthings.com/waypoints/)
* [Smooth Scroll](https://github.com/kswedberg/jquery-smooth-scroll)

##Features
###Images
To have an enlargable image, put the image inside a link to the larger image. Add the class `enlarge` to the link. 
It's a good idea to add the class `img-responsive` to most images so that they fill the column width they are in and remain responsive.
Using data-src for the actual image source and using the transparent.gif will allow lazyloading of content
```html
<figure>
	<a href="photos/pumpkin_queen/pumpkin_8386.jpg" rel="enlarge" class="enlarge">
		<img src="img/transparent.gif" data-src="photos/pumpkin_queen/pumpkin_8386.jpg" class="img-responsive">
	</a>
	<figcaption class="credit">Zach Wise</figcaption>
	<figcaption>
		Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, 
		id pulvinar odio lorem non turpis. Nullam sit amet enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
	</figcaption>
</figure>
```
or even easier, I've added some javascript to do magic on basic figure images to have the same enlarge effect
```html
<figure>
	<img src="img/transparent.gif" data-src="photos/pumpkin_queen/pumpkin_8386.jpg" class="img-responsive">
	<figcaption class="credit">Zach Wise</figcaption>
	<figcaption>
		Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, 
		id pulvinar odio lorem non turpis. Nullam sit amet enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
	</figcaption>
</figure>
```
###Story Covers
```html
<section id="story-cover" class="story-cover">
	<div style="background-image: url('img/example.jpg');" class="story-cover-image"></div>
	<div class="story-cover-arrow"></div>
	<div class="story-cover-content">
		<h1>Awesome Story Title Goes Here</h1>
		<p class="lead">Deck or lead/lede will go here. It can be a sentence or two but shouldn't go over that</p>
		<p class="byline">by John Doe</p>
		<p class="byline">Photographs by Jane Doe</p>
	</div>
</section>
<section class="story-cover-caption">
	<div class="caption">Senior Jacqueline Martinez and her boyfriend share a bus ride on her second to last day of high school. The two are expecting their first child this November.</div>
</section>
```
###Blockquotes
```html
<blockquote>
	<p>We strongly agree that messages that have been out there have been overblown.</p>
	<cite>John Doe</cite>
</blockquote>
```

###Lead Paragraphs
```html
<p class="lead">Paragraph text with lead class. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat.</p>
```