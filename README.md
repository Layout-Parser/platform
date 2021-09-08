# The Layout Parser Open Platform

The Layout Parser Open Platform hosts a collection of layout detection models and document image analysis pipelines. We hope this platform can make it easier for practitioners to find and use the best layout detection models for their research and application. And it can provide a platform for the interchange of ideas for building complex DIA pipelines.
 
We welcome contributions to the layout parser platform -- feel free to [submit](https://github.com/Layout-Parser/platform/issues/new?assignees=lolipopshock&labels=model%2Fupload&template=new-model-pipeline-addition.md&title=) your models or pipelines to the platform following the instructions below.

## Submission Instructions
 
### Submitting a Layout Detection Model
1. Train your own layout detection models
    - Helpful resources: 
        - [layout-model-training](https://github.com/Layout-Parser/layout-model-training)
        - [Automatically Parse any Document Train Detectron2 based Custom Models for Document Layout Parsing](https://towardsdatascience.com/auto-parse-and-understand-any-document-5d72e81b0be9)
2. [Submit a pull request](https://github.com/Layout-Parser/layout-parser/compare) in the main layout-parser repo:
    - If your layout model is based on an existing framework like Detectron2 or PaddleDetection, you just need to provide the model weights and we’ll incorporate it in the library. 
    - If your layout model is built on a different framework, you might also need to implement the LayoutDetector Class yourself. 
3. [Submit the model details](https://github.com/Layout-Parser/platform/issues/new?assignees=lolipopshock&labels=model%2Fupload&template=new-model-pipeline-addition.md&title=) to the Layout Parser Open Platform. 
    - You might need to provide `lp-model-config` in the model card data section. It will be assigned in the previous PR in the model adding request. 

Please note: the models submitted to the Layout-Parser repo will be assigned with Apache 2.0 license in accordance with the layoutparser library. If you don't wish to submit your models under the license, you can also consider including the model in a DIA pipeline repo and have it submitted instead.

### Submitting a Document Image Analysis Pipeline
1. Develop your own document image analysis pipeline in a separate Github repo. 
    - There are not any license requirements for the pipeline repos as they are individual projects from layout-parser. 
2. [Submit the pipline details](https://github.com/Layout-Parser/platform/issues/new?assignees=lolipopshock&labels=model%2Fupload&template=new-model-pipeline-addition.md&title=) to the Layout Parser Open Platform. 
    - You can specify the `link` to the DIA pipeline repo in the model card data section. 
