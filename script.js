'use strict';

var allArticles = [];

function Article (info) {
  this.title = info.title;
  this.author = info.author;
  this.githubUrl = info.authorUrl;
  this.imgsrc = info.imgsrc;
  this.problem = info.problem;
  this.methodsUsed = info.methodsUsed;
  this.publishedOn = info.publishedOn;
}
// handlbars
Article.prototype.toHtml = function(){
  var source = $('#portfolio-template').html();
  var templateRender = Handlebars.compile(source);
  var context = allArticles;
  // DONE: If your template will use properties that aren't on the object yet, add them.
    //   Since your template can't hold any JS logic, we need to execute the logic here.
    //   The result is added to the object as a new property, which can then be referenced by key in the template.
    //   For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishstatus = this.publishedOn ? `published ${this.daysAgo} days ago`: `(darft)`;
// old way of doing it.
//   var $newArticle = $('article.template').clone().removeClass('template');
//   $newArticle.attr('data-category',this.category);
//
// $newArticle.attr('data-author'),this.author);
// $newArticle.find('.byline a').text('this.author').attr('href', this.authorUrl);
//
// $newArticle.find('h1:first').text(this.title);
// $newArticle.find('.article-problem').hmtl('this.problem');
// $newArticle.find('.article-methodsUsed').hmtl('this.methodsUsed');
// $newArticle.find('time[pubdate]').attr('datetime', this.publication);
// $newArticle.find('time').text('about' + parseInt(new Date() - new Date (this.publishedOn))/6-/6-/24/1000) + 'days ago');
// return newArticle;
  return templateRender(this);
};

sourceData.sort(function(a,b){
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

sourceData.forEach(function(a){
  allArticles.push(new Article(a));
});

allArticles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
