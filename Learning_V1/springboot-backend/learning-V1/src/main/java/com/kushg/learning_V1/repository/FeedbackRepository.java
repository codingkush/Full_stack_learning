package com.kushg.learning_V1.repository;

import com.kushg.learning_V1.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
    
}
