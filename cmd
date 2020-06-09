sudo docker-compose up -d
sudo docker container ls | grep namenode | gawk '{print $1}'
sudo docker cp ../UserCount.java bcb994d56375:UserCount.java
sudo docker cp ../ProductCount.java bcb994d56375:ProductCount.java
sudo docker cp ../RatingCount.java bcb994d56375:RatingCount.java
sudo docker exec -it namenode bash



mkdir mr
javac UserCount.java  -cp $(hadoop classpath) -d mr
javac ProductCount.java  -cp $(hadoop classpath) -d mr
javac RatingCount.java  -cp $(hadoop classpath) -d mr

jar -cvf pfa.jar -C mr/ .
hadoop jar pfa.jar hadoop.UserCount out.csv output_uc_d
hadoop jar pfa.jar hadoop.ProductCount out.csv output_pc_d
hadoop jar pfa.jar hadoop.RatingCount out.csv output_rc_d

hadoop fs -get output_pc_d
hadoop fs -get output_uc_d
hadoop fs -get output_rc_d

sudo docker cp namenode:/output_pc_d ../
sudo docker cp namenode:/output_uc_d ../ 
sudo docker cp namenode:/output_rc_d ../

cp output_pc_d/part-r-00000 app/product_count
cp output_rc_d/part-r-00000 app/rating_count
cp output_uc_d/part-r-00000 app/user_count

