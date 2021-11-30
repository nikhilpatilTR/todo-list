(ns reframeexample.views
  (:require
   [re-frame.core :as re-frame]
   [reframeexample.events :as events]
   [reframeexample.subs :as subs]
   [reframeexample.effects :as effects]
   ))

(defn getfinallist
  [list]
  [:ul 
   [:li list]
   ]
  )

(defn main-panel []
  (let [
        todolist (re-frame/subscribe [::subs/todolist])
        finallist (re-frame/subscribe [::subs/finallist])                             
        ]
    [:div
      [:div 
     [:h3
       "to-do list"]
     [:input {:type "text" :on-change #(re-frame/dispatch [::events/settodovalue (-> % .-target .-value)]) :name "todo"}]
     [:button {:on-click #(re-frame/dispatch [::events/addtodolist "todolist"])} "add to list"]
       (map getfinallist @finallist)
     ]
     ]))
