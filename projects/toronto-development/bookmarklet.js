/* For uncle's download problem.

1. Downloads blobs via Ajax
2. Make the blobs available via object URL
3. Uses link "download" attribute to set the filename.

Bookmarklet maker:
http://bookmarklets.org/maker/
*/

$('[alt="Download"]')
    .each(function() {
        // find corresponding filename
        var filename = $(this)
            .closest('tr')
            .find('td:first')
            .text();
        filename = $.trim(filename);
        
        // extract download ID
        var funcString = this.onclick.toString();
        var downloadID = /\d+/.exec(funcString);
        
        // create download URL
        var downloadURL = 'viewSupportingDocs.do?action=viewSupportingDocPdf&attachmentRsn=' +
            downloadID;
        
        var $link = $('<a>Start Download</a>')
            .attr('download', filename + '.pdf')
            .css('cursor', 'pointer')
            .one('click', function() {
                $link.text('Loading...');
                
                var xhr = new XMLHttpRequest();
                xhr.open('GET', downloadURL, true);
                xhr.responseType = 'blob';
                
                xhr.onload = function(e) {
                    if (this.status != 200) {
                        alert('server error, could not download');
                    }
                    
                    // get binary data as a response
                    var blob = this.response;
                    var downloadURL = URL.createObjectURL(blob);
                    $link
                        .attr('href', downloadURL)
                        .text('Download ready')[0].click();
                };
                
                xhr.send();
                return false;
            });
        
        $(this).replaceWith($link);
    });



