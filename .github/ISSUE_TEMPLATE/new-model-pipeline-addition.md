---
name: New Model/Pipeline Addition   
about: Submit a newly trained layout model or layout pipline into the layout parser platform 
title: ''
labels: model/upload
assignees: lolipopshock
---

# Add new layout models or pipelines  

## Model Description 
*Please provide a short description of the layout model or pipelines. An example document image will be highly appreciated.* 

## Model Card Data 
*Please fill in the model details following the instructions, such that your model can be rendered in the layout platform.*

```yaml
name: # The name of the model, e.g., PubLayNet Model
link: # If exists, please provide the link to the original github repo. 
doctype: # The category of the document, e.g., scientific, business, historical
doclanguage: # The language of the document. Please use the language code from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes. 
description: # A short description of the function of the models. 
config-names: # Here you can specify model config names and their architecture and sizes. For layout pipelines, you don't need to add this. 
- lp-model-config: # e.g., lp://PubLayNet/model1/xxx
   architecture: # e.g., detectron2
   sizes: # e.g., small
- lp-model-name: # sometimes there will be more than one models trained on the same dataset, lp://PubLayNet/model2/xxx
   architecture: # e.g., efficiendet
   sizes: # e.g., large
min-lp-version: # The first lp release version that includes the model in the repo
```
