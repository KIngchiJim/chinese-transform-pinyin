# What Is It
It is a tool which you can input chinese, the tool can transform your input to pinyin. You will have a good time to use it.

```
npm install chinese-transform-pinyin
```

Thanks `zhujun24` dictionary. It's very good

# Have Three Options
- `firstChar` only save the first char of the pinyin
- `onlyTone` only save the tone of the pinyin
- `removeTone` this option can transform the tone to the English char

You can use the three options together or only use the one of them, also you can choose any two options to use together.

## For Example
```
import Pinyin from 'chinese-transform-pinyin'

Pinyin('拼音库第一次尝试') // pīn yīn kù dì yī cì cháng shì
```

or

```
import Pinyin from 'chinese-transform-pinyin'

Pinyin('拼音库第一次尝试', { removeTone: true }) // pin yin ku di yi ci chang shi
```

or

```
import Pinyin from 'chinese-transform-pinyin'

Pinyin('今天天气不错哟', { firstChar: true }) // j t t q b c y
```

also you can

```
import Pinyin from 'chinese-transform-pinyin'

Pinyin('今天天气不错哟', { firstChar: true, onlyTone: true }) // jī tā tā qì bù cò yō
```

## A Tip
`you may choose the firstChar option and the removeTone option to use together, but the result may be same when you use three options together, so I just recommend you to use three option together when you want to do this, because I do not make it happen in this version`