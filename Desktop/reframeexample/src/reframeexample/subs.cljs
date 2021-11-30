(ns reframeexample.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
::todolist
(fn [db]
  (:todolist db)
  ) 
 )

(re-frame/reg-sub
::finallist
(fn [db]
  (:finallist db)
  ) 

 )
