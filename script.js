'use strict';
var allArticles = [];

fucntion Article (info){
  this.title = info.title;
  this.category = info.category;
  this.author = info.author;
  this.authorUrl = info.authorUrl;
  this.body = info.body;
  this.publishedOn = info.publishedOn;
}
Article.protoyype.toHtml = function(){
  var $newArticle = $('article.template').clone().removeClass('template');
  $newArticle.attr('data-category',this.category);

$newArticle.attr('data-author'),this.author);
$newArticle.find('.byline a').text('this.author').attr('href', this.authorUrl);

$newArticle.find('h1:first').text(this.title);
$newArticle.find('.article-body').hmtl('this.body');
$newArticle.find('time[pubdate]').attr('datetime', this.publication);
$newArticle.find('time').text('about' + parseInt(new Date() - new Date (this.publishedOn))/6-/6-/24/1000) + 'days ago');
return newArticle;
};

sourceData.sort(function(a,b){
return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

sourceData.forEach(function(a){
  allArticles.push(new Article(ele));
});

allArticles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
