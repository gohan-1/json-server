from django.shortcuts import render

import os
from django.conf import settings
import googletrans
from  googletrans import Translator
from django.views.decorators.csrf import csrf_exempt  
from django.http import HttpResponse,JsonResponse
import json
import PyPDF2
from pdfminer.high_level import extract_text



@csrf_exempt
def languages(request):
    if request.method == 'GET':
        # print(googletrans.LANGUAGES)
        old_dict=googletrans.LANGUAGES
        new_languages = dict([(value, key) for key, value in old_dict.items()]) 
        return JsonResponse(new_languages)

@csrf_exempt
def read(request):
    try:
        if request.method == 'POST':
                translator = Translator()
                json_data = json.loads(request.body)
                print("abcd", json_data)
                folder = json_data['folder']
                print(os.getcwd())
                arr = os.listdir(folder)
                # list_1 = list()
                list_2 = dict()
                print(arr)
                for files in arr:
                    print("abc",files)
                    
                    with open('./'+folder +'/'+files,'rb') as fo :
                        if files[-4:]==".pdf" :
                            text = extract_text(fo)
                            list_rec=text.split("\n")
                            # for rec in list_rec :
                            print(type(text))   
                            trans_text = translator.detect(list_rec[1])
                            print(trans_text)
                            source = trans_text.lang   
                            translation = translator.translate(text,src=source ,dest='en')
                            
                        with open(''+files, 'w') as f:
                             f.write("%s\n" % translation.text)
                        fo.close()
                        list_1 = list()
                        
                        if files[-4:]==".txt":
                            print("abcd")
                            for rec in fo :
                                trans_text = translator.detect(rec)
                                print(trans_text)
                                source = trans_text.lang
                                print(source)
                                translation = translator.translate(rec,src=source ,dest='en')
                                print(translation.text)
                                list_1[source] = translation.text
                        with open(''+files, 'w') as f:
                            f.write("%s\n" % translation.text)
                        fo.close()
                        list_1 = list()
                       
                    # return JsonResponse(list_2, safe=False)
    except Exception:
        pass
        # return JsonResponse(Exception, safe=False)

        
            
    
    
@csrf_exempt
def translate(request):
    if request.method == 'POST':
        try:
             json_data = json.loads(request.body)
             print(json_data)
             file = json_data['file']
             translator=Translator()
             lan_param = json.loads(request.body)
             trans_text=translator.detect(lan_param["text"])
             print(trans_text)
             return JsonResponse(trans_text,safe=False)
        except:
            pass




