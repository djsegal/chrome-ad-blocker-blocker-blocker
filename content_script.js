$(document).ready(blockAdBlockerBlocker)
$(window).on("load", blockAdBlockerBlocker);

function blockAdBlockerBlocker(node)
{
	setTimeout(function () {
		let pageBody = $('body'),
				bodyClasses = pageBody[0].classList,
				arrayLength = bodyClasses.length;

		for (i = 0; i < arrayLength; i++) {
			let curClassName = bodyClasses[i];
		  if ( !curClassName.match('modal') ) { continue; }

		  pageBody.removeClass(curClassName);

		  let modalClassName = curClassName.replace('-open', ''),
		  		modalObj = $('.' + modalClassName);

  		if ( modalObj.length === 0 ) { return; }
			modalObj.remove();

			let modalPrefix = curClassName.substr(0, curClassName.indexOf('-modal'));
		  $("*[class^='" + modalPrefix + "-']").remove();
		}
	}, 1000);
}
