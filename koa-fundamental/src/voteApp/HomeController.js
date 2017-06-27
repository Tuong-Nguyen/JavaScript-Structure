/**
 * Created by nctuong on 6/27/2017.
 */

module.exports = {
  showHomeView
};

async function showHomeView(context, next){
  await context.render('home.pug');
}
