# SDK

## General Knowledge

Like the API, the SDK also adopts a minimalist style with just one function. This SDK is a compatible version that supports both sct.ftqq.com and sc3.ft07.com, meaning you don't need to worry about which version the user is using - it will automatically adapt based on the key.
The parameters for all languages are:

1. sendkey
2. title
3. desp - Message content, supports markdown, can include external image links (please use https).
4. options - Additional options

Additional options include:

```jsonc
{
    tags?: string; // SC3 only: List of tags, multiple tags separated by vertical bars 
    short?: string; // SC3 and SCT: Content of the message card, especially useful when desp is markdown
    noip?: 1; // SCT only: Whether to hide the calling IP, 1 for hide
    channel?: string; // SCT only: Message channels used for pushing, multiple channels separated by vertical bars
    openid?: string; // SCT only: openid for message CC, only for WeCom application messages and test account channels, multiple openids separated by commas or vertical bars
}
```

Response format definition:

```jsonc
{
    code: number; // Status code, 0 for success 
    message: string;  // Response message, corresponds to the status code
    data?: any;  // Optional return data, format differs between SCT and SC3
}
```
Below are the SDKs for various languages and their usage, click to view details

<details>
<summary>JavaScript SDK ( Both web & nodejs )</summary>

## JS SDK

### SDK Location
- npm : <https://www.npmjs.com/package/serverchan-sdk>


### Installation

```bash
npm install serverchan-sdk
```

### Usage Example

```js
import {scSend} from 'serverchan-sdk'; 

const sendkey = '...'; // Replace with your actual Server Chan sendkey
const title = 'Test Notification';
const desp = 'This is a test message';

const response = await scSend(sendkey, title, desp, { tags: 'server-alert|report' });
console.log('Response:', response);
```
</details>


<details>
<summary>PHP SDK</summary>

## PHP SDK

### SDK Location
- compose package : <https://packagist.org/packages/easychen/serverchan-sdk>


### Installation

```bash
composer require easychen/serverchan-sdk
```

### Usage Example

```php
$ret = scSend('sendkey', 'title', 'desp', ['tags'=>'server-alert|image']);
print_r($ret);
```
</details>

<details>
<summary>Python SDK</summary>

## Python SDK

### SDK Location
- pip package : <https://pypi.org/project/serverchan-sdk/>


### Installation

```bash
pip install serverchan-sdk
```

### Usage Example

```python
from serverchan_sdk import sc_send

# Send message
sendkey = "..."
title = "Test Title"
desp = "This is the message content"
options = {"tags": "server-alert|image"}  # Optional parameters

response = sc_send(sendkey, title, desp, options)
```
</details>

<details>
<summary>Golang SDK</summary>

## GoLang SDK

### SDK Location
- <https://github.com/easychen/serverchan-sdk-golang>


### Installation

```bash
go get github.com/easychen/serverchan-sdk-golang
```

### Usage Example

```go
package main

import (
    "fmt"
    "github.com/easychen/serverchan-sdk-golang"
)

func main() {
    sendkey := "your-sendkey"
    title := "Test Message"
    desp := "This is a test message"
    
    resp, err := serverchan_sdk.ScSend(sendkey, title, desp, nil)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Response:", resp)
    }
}
```
</details>

<details>
<summary>Dart/Flutter SDK</summary>

## Dart SDK

### SDK Location
Pub Package - <https://pub.dev/packages/serverchan_sdk>

> This package depends on the http package

### Installation

Add dependency in `pubspec.yaml` 

```
dependencies:
    serverchan_sdk:
```
Then run

```bash
dart pub get 
# or
flutter pub get
```

### Usage Example

```dart
import 'package:serverchan_sdk/serverchan_sdk.dart';

void main() async {
  const sendkey = 'your-sendkey';
  const title = 'Test Title';
  const desp = 'This is the detailed message content';

  try {
    ScSendResponse response = await scSend(sendkey, title, desp: desp);
    print('Response Code: ${response.code}');
    print('Response Message: ${response.message}');
  } catch (e) {
    print('Error: $e');
  }
}
```
</details>

## Unsupported Languages

If your programming language is not covered, you can paste the following prompt to ChatGPT/Claude/DeepSeek/Kimi, and let AI help you write one immediately.

````
Please refer to the following TypeScript code and write the corresponding implementation in <xxx language>:


```typescript
import fetch from 'cross-fetch';

// ScSendOptions defines optional parameters for the push function
export interface ScSendOptions {
    /** sctp only: List of tags, multiple tags separated by vertical bars */
    tags?: string;
    /** sctp and non-sctp: Brief description for the message card */
    short?: string;
    /** non-sctp: Whether to hide calling IP, 1 for hide */
    noip?: 1;
    /** non-sctp: Message channels used for pushing, multiple channels separated by vertical bars */
    channel?: string;
    /** non-sctp: openid for message CC, multiple openids separated by commas or vertical bars */
    openid?: string;
}

// ScSendResponse defines the response result of the push function
export interface ScSendResponse {
    /** Status code */
    code: number;
    /** Response message */
    message: string;
    /** Optional return data */
    data?: any;
}

// Function to call Server Chan's push service
export async function scSend(
    sendkey: string,
    title: string,
    desp: string = '',
    options: ScSendOptions = {}
): Promise<ScSendResponse> {
    
    const url = sendkey.startsWith('sctp') 
        ? `https://${sendkey}.push.ft07.com/send`