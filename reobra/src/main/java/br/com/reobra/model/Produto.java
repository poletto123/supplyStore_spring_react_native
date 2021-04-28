package br.com.reobra.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="tbl_produto")
public class Produto {

    @Id
    @SequenceGenerator(name = "seqProduto", sequenceName = "seqProduto", initialValue = 1, allocationSize = 1)
    @GeneratedValue(generator = "seqProduto")
    @Column(name="produto_id")
    private Long id;

    @Column
    private String descricao;

    @Column(unique = true)
    private String codebar;

    @Column
    private BigDecimal custo;

    @Column
    private BigDecimal preco;

}
