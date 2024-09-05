
```css
.welcome {
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    font-size: 0;
    color: #666;
}
```
### margin
本元素与周围元素的距离

### height
本元素的高度

### line-height
设置行间距， 当与 height 一致的时候，这个元素中的字就是居中。


```css
.header .search form {
    margin-top: 42px;
    font-size: 0;
}
```
没有.的就是直接选择html元素，就像上面的 form

### vertical-align
这个属性常用于调整文本与图像的相对位置，或在表格中调整内容的垂直对齐。

### background-position
在 CSS 中，background-position 属性用于设置背景图像在元素中的初始位置

```css
.topbar-nav .list li {
    float: left;
}
```
### float
浮动元素会从其所在容器的正常文档流中脱离，并在容器的左侧排列，紧靠容器的左边缘或前一个浮动元素的右侧。

```css
.main-content .slide-nav li:hover {
    background-color: #DD302D;
}
```
### hover
当鼠标悬停在 .slide-nav 元素内的 li 元素上时，这些 li 元素的背景颜色会变为 #DD302D（一种红色）
:hover: 这是一个伪类，用于选择用户鼠标悬停时的元素。

```css
.main-content .slide-nav {
    width: 190px;
    height: 458px;
    background-color: #F4F4F4;
    position: relative;
}
```
### position: relative;
让元素相对于它的正常位置进行定位。这意味着，元素原本在页面中的位置不会被改变，只是它会基于这个位置做一些相对的移动。
### position: absolute;
脱离文档流：使用 position: absolute; 的元素会从正常的文档流中脱离出来，这意味着它不再占据空间，页面上的其他元素会像它不存在一样重新排布。

### display: block;
像块级元素一样显示

```java
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@RestController
@RequestMapping("/upload")
public class FileUploadController {

    @PostMapping("/file")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>("File is empty", HttpStatus.BAD_REQUEST);
        }

        try (BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            String line;
            System.out.println("File content:");

            while ((line = br.readLine()) != null) {
                System.out.println(line);  // 打印文件内容
            }

            return new ResponseEntity<>("File uploaded successfully", HttpStatus.OK);

        } catch (IOException e) {
            return new ResponseEntity<>("Error reading file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

```