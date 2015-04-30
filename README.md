# Bootstrap Starter Kit

##Included Javascript
* [Laziest Loader Library](http://sjwilliams.github.io/laziestloader/)
* [Fluidbox](http://terrymun.github.io/Fluidbox/)
* [Waypoints](http://imakewebthings.com/waypoints/)
* [Smooth Scroll](https://github.com/kswedberg/jquery-smooth-scroll)

##Images
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