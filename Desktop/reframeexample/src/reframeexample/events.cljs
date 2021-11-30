(ns reframeexample.events
  (:require
   [re-frame.core :as re-frame]
   [reframeexample.db :as db] 
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-fx
::settodovalue 
 (fn [{:keys [db]} [_ val]]
   {:fx [[:write-todolist-to-local-storage val]]}
   )
 )

(re-frame/reg-event-fx
::addtodolist
[(re-frame/inject-cofx :fetch-todolist-from-local-storage "todolist")]  
(fn [cofx [_{:keys [data]}]]
  (println cofx)
  (let [{newval :fetch-todolist-from-local-storage} cofx]
    {:db (update (:db cofx) :finallist conj newval)}
    )
  ) 
 )


(re-frame/reg-event-fx
 ::load-list
 (fn [cofx _]
   (println cofx)
   (let [{{newval :finallist} :db} cofx]
     (println newval)))
 )





