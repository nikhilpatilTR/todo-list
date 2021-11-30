(ns reframeexample.effects
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-fx
:write-todolist-to-local-storage 
(fn [value]
  (.setItem (.-localStorage js/window) "todolist" value)
  ) )


(re-frame/reg-cofx
:fetch-todolist-from-local-storage
(fn [cofx localstorage_key]
  
  (assoc cofx :fetch-todolist-from-local-storage (.getItem (.-localStorage js/window) localstorage_key))
  ) 
 
 )