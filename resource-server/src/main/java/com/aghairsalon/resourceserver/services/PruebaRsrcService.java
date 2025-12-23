package com.aghairsalon.resourceserver.services;

import com.aghairsalon.resourceserver.model.PruebaRsrc;
import com.aghairsalon.resourceserver.repository.PruebaRsrcRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PruebaRsrcService {

    private final PruebaRsrcRepository pruebaRsrcRepository;

    public List<PruebaRsrc> findAll() {
        return pruebaRsrcRepository.findAll();
    }

}
