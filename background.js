// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function interceptRequest(request){
	var redirectUrl = request.url.replace(/(\/www\.reddit.com)|(\/reddit.com)/g, "/old.reddit.com");
	return {
		"redirectUrl": redirectUrl
	}
}

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['*://*.reddit.com/*', '*://reddit.com/*'] }, ["blocking"]);